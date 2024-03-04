import sendRequest from "./send-request";
const BASE_URL = '/api/knives';

export function getKnives() {
  return sendRequest(BASE_URL)
}

export function addKnife(content) {
  return sendRequest(BASE_URL, 'POST', content)
}

export function getKnife(id) {
  return sendRequest(`${BASE_URL}/${id}` )
}

export function deleteKnife(idx) {
  return sendRequest(`${BASE_URL}/${idx}`, 'DELETE')
} 

export function updateKnife(content, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', content)
}

// SHARPENING


export function addSharpening(idx, content) {
  return sendRequest(`${BASE_URL}/${idx}/sharpening`, 'POST', content)
}

// export function deleteSharpening(idx, sharpeningId) {
//   return sendRequest(`${BASE_URL}/${idx}/sharpening/${sharpeningId}`, 'DELETE')
// }

// export function updateSharpening(idx, sharpeningId, content) {
//   return sendRequest(`${BASE_URL}/${idx}/sharpening/${sharpeningId}`, 'PUT', content)
// }

// // NOTE 

export function addNote(idx, content) {
  return sendRequest(`${BASE_URL}/${idx}/note`, 'POST', content)
}

// export function deleteNote(idx, noteId) {
//   return sendRequest(`${BASE_URL}/${idx}/note/${noteId}`, 'DELETE')
// }

// export function updateNote(idx, noteId, content) {
//   return sendRequest(`${BASE_URL}/${idx}/note/${noteId}`, 'PUT', content)
// }

