export type LoaderState = boolean

export const loader = {
  state: false,
  reducers: {
    showLoader: (state: LoaderState) => true,
    hideLoader: (state: LoaderState) => false,
  },
}
