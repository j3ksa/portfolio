interface Props {
    func: () => void
    delay: number
}

export const debounce = ({func, delay}:Props) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };
  