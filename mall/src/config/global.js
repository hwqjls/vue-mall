//本地化存储
export const setLocalStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

//本地化获取
export const getLocalStore = (name) => {
  if (!name) return
  window.localStorage.getItem(name)
}

export const removeLocalStore = (name) => {
  if (!name) return
  window.localStorage.removeItem(name)
}

export const _VERSION_ = '1.4.3'