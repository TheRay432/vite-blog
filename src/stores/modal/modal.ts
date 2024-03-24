import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  /** 彈窗是否顯示 */
  const isModalOpen = ref(false);
  /** 顯示元件 */
  const modalComponent = ref<Component | null>(null);

  /** 打開彈窗 */
  const opModal = (component: Component) => {
    isModalOpen.value = true;
    modalComponent.value = component;
  };
  /** 關閉彈窗 */
  const closeModal = () => {
    isModalOpen.value = false;
    modalComponent.value = null;
  };

  return {
    /** 彈窗是否顯示 */
    isModalOpen,
    /** 顯示元件 */
    modalComponent,
    opModal,
    closeModal,
  };
});
