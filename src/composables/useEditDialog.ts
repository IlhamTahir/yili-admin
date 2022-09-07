import { ref } from "vue";
import type { Ref } from "vue";
import type { CellData } from "tdesign-vue-next";

export const useEditDialog = <T>(defaultData: T) => {
  const showDialog = ref(false);
  const editData = <Ref<T>>ref(defaultData);
  const handleCreate = () => {
    showDialog.value = true;
  };

  const handleEdit = (item: CellData<T>) => {
    editData.value = item.row;
    showDialog.value = true;
  };

  const onDialogClose = () => {
    showDialog.value = false;
    editData.value = defaultData;
  };
  return {
    showDialog,
    editData,
    handleCreate,
    handleEdit,
    onDialogClose,
  };
};
