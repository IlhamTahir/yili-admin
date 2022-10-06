import { ref } from "vue";
import type { Ref } from "vue";
import type { CellData } from "tdesign-vue-next";
import { MessagePlugin } from "tdesign-vue-next";
import type { Editable } from "@/api/types";

export const useEditDialog = <T extends { id: string }, R>(
  api: Editable<R, T>,
  modelLabel = ""
) => {
  const showDialog = ref(false);
  const editData = <Ref<null | T>>ref(null);
  const handleCreate = () => {
    showDialog.value = true;
  };

  const handleEdit = (item: CellData<T>) => {
    editData.value = item.row;
    showDialog.value = true;
  };

  const handleConfirm = async (data: R) => {
    if (editData.value && editData.value.id) {
      await api.edit(editData.value.id, data);
      await MessagePlugin.success(`${modelLabel}编辑成功`);
    } else {
      await api.create(data);
      await MessagePlugin.success(`${modelLabel}创建成功`);
    }
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
