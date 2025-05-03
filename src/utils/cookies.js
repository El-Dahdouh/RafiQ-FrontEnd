import Cookies from "js-cookie";
import { encrypt, decrypt } from "./crypto";

export function setEncryptedCookie(name, value, expiresDays = 7) {
  const encryptedValue = encrypt(value);
  Cookies.set(name, encryptedValue, {
    expires: expiresDays,
    secure: true,
    sameSite: "Strict",
  });
}

export function getDecryptedCookie(name) {
  const encryptedValue = Cookies.get(name);
  if (!encryptedValue) return null;
  try {
    return decrypt(encryptedValue);
  } catch (error) {
    console.error("Decryption failed", error);
    return null;
  }
}

export function removeCookie(name) {
  Cookies.remove(name);
}
