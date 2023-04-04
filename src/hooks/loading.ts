import { ref } from "vue";

export const useLoading = () => {
  const loading = ref<boolean>(false);
  const setLoading = (value: boolean) => {
    loading.value = value;
  }
  const toggleLoading = () => {
    loading.value = !loading.value;
  }
  return {
    loading,
    setLoading,
    toggleLoading,
  }
}