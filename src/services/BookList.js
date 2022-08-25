import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('books', {
      params: {
        search: search
      }
    })
  },
  post (book) {
    return Api().post('books', book)
  },
  show (bookId) {
    return Api().get(`books/${bookId}`)
  },
  put (bookId) {
    return Api().put(`books/${bookId}`, bookId)
  }
}

/*
index/song
showall/songs/id
*/
