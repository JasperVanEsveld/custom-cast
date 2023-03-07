declare const cast: any;
declare const chrome: any;

//@ts-ignore: Custom Google Func
window["__onGCastApiAvailable"] = function (isAvailable: boolean) {
  if (isAvailable) {
    cast.framework.CastContext.getInstance().setOptions({
      receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
    });
  }
};

function getCurrentSession() {
  return cast.framework.CastContext.getInstance().getCurrentSession();
}

export const CAST = {
  createInfo: (url: string, type?: string) => {
    return new chrome.cast.media.MediaInfo(url, type);
  },
  loadInfo: async (info: any) => {
    const request = new chrome.cast.media.LoadRequest(info);
    if (getCurrentSession() === null) {
      await cast.framework.CastContext.getInstance().requestSession();
    }
    const current = getCurrentSession();
    return current.loadMedia(request);
  },
};
