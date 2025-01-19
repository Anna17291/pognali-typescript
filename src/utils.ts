import { TABLET_WIDTH } from "./const";

export const onMenuItemClick = (
  cb: (arg: boolean) => void,
  isActive: boolean
) => {
  if (window.innerWidth >= TABLET_WIDTH) {
    cb(true);
    return;
  }

  if (!isActive) {
    cb(true);
    return;
  }
  cb(false);
};

export const onMenuItemFocus = (cb: (arg: boolean) => void) => {
  if (window.innerWidth >= TABLET_WIDTH) {
    cb(true);
  }
};

export const onMenuItemLeave = (cb: (arg: boolean) => void) => {
  if (window.innerWidth >= TABLET_WIDTH) {
    cb(false);
  }
};

export const formatPrice = (price: number) => {
  let priceString = price.toString();
  const stringLength = priceString.length;
  if (stringLength > 3) {
    for (let i = stringLength - 3; i > 0; i = i - 3){
      priceString = `${priceString.slice(0, i)} ${priceString.slice(i)}`;
    }
  }
  return priceString;
};
