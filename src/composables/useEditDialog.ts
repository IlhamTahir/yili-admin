import { ref } from "vue";
import type { Ref } from "vue";
import type { CellData } from "tdesign-vue-next";
import { MessagePlugin } from "tdesign-vue-next";
import type { Editable } from "@/api/types";
import type { BaseModel } from "@/model/BaseModel";
import { useI18n } from "@/composables/useI18n";

const { t } = useI18n();
export const useEditDialog = <T extends BaseModel, CreateModel, EditModel>(
  api: Editable<CreateModel, EditModel, T>
) => {
  const showDialog = ref(false);
  const editData: Ref<null | T> = ref(null);
  const handleCreate = () => {
    showDialog.value = true;
  };

  const handleEdit = (item: CellData<T>) => {
    editData.value = item.row;
    showDialog.value = true;
  };

  const handleConfirm = async (
    data: CreateModel | EditModel,
    fetchData: () => void | null
  ) => {
    if (editData.value && editData.value.id) {
      await api.edit(editData.value.id, data as EditModel);
      await MessagePlugin.success(t("dialog.editSuccessMessage"));
    } else {
      await api.create(data as CreateModel);
      await MessagePlugin.success(t("dialog.createSuccessMessage"));
    }
    fetchData?.();
    onDialogClose();
  };

  const onDialogClose = () => {
    showDialog.value = false;
    editData.value = null;
  };
  return {
    showDialog,
    editData,
    handleCreate,
    handleEdit,
    onDialogClose,
    handleConfirm,
  };
};
