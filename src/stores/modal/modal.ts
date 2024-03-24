import { ModalConfig } from '@/share/class';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  /** 彈窗是否顯示 */
  const isModalOpen = ref(false);
  /** 顯示元件 */
  const modalComponent = ref<Component | null>(null);
  /** 彈窗設定config */
  const modalConfig = ref<ModalConfig>(new ModalConfig());

  /** 打開彈窗 */
  const opModal = (component: Component, config?: ModalConfig) => {
    isModalOpen.value = true;
    modalComponent.value = markRaw(component);
    config ? (modalConfig.value = config) : '';
  };
  /** 關閉彈窗 */
  const closeModal = () => {
    isModalOpen.value = false;
    modalComponent.value = null;
    modalConfig.value = new ModalConfig();
  };

  return {
    /** 彈窗是否顯示 */
    isModalOpen,
    /** 顯示元件 */
    modalComponent,
    /** 彈窗設定config */
    modalConfig,
    opModal,
    closeModal,
  };
});
