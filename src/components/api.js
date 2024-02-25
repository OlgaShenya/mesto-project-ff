import { configApi } from "./const";

const checkStatus = (res) => {
  if (res.ok) return res.json();
  return Promise.reject(`Request failed. Status: ${res.status}`);
};

export const requestInitialCards = async () => {
  return fetch(`${configApi.baseUrl}/cards`, {
    headers: configApi.headers,
  }).then(checkStatus);
};

export const requestUser = async () => {
  return fetch(`${configApi.baseUrl}/users/me`, {
    headers: configApi.headers,
  }).then((res) => res.json());
};

export const requestDeleteCard = async (cardId) => {
  return fetch(`${configApi.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: configApi.headers,
  }).then(checkStatus);
};

export const requestLikeCard = async (cardId, isLiked) => {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardId}`, {
    method: isLiked ? "DELETE" : "PUT",
    headers: configApi.headers,
  }).then(checkStatus);
};

export const requestProfileUpdate = async (profile) => {
  return fetch(`${configApi.baseUrl}/users/me`, {
    method: "PATCH",
    headers: configApi.headers,
    body: JSON.stringify(profile),
  }).then(checkStatus);
};

export const requestAvatarUpdate = async (avatar) => {
  return fetch(`${configApi.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: configApi.headers,
    body: JSON.stringify(avatar),
  }).then(checkStatus);
};

export const requestPlaceAdd = async (place) => {
  return fetch(`${configApi.baseUrl}/cards`, {
    method: "POST",
    headers: configApi.headers,
    body: JSON.stringify(place),
  }).then(checkStatus);
};
