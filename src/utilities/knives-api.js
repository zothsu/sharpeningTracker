import sendRequest from "./send-request";
const BASE_URL = '/api/knives';

export function getKnives() {
  return sendRequest(BASE_URL)
}

export function addKnife(content) {
  return sendRequest(BASE_URL, 'POST', content)
}
