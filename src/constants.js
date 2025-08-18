// Centralized API endpoints for server and client usage
// Prefer setting API_BASE_URL (server-only) or NEXT_PUBLIC_API_BASE_URL (client) in the environment
const API_ROOT = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

export const API_V1 = `${API_ROOT}/api/v1`;
export const CLASSES_URL = `${API_V1}/classes`;
export const TRAINERS_URL = `${API_V1}/trainers`;
export const USERS_URL = `${API_V1}/users`;
export const AUTH_TOKEN_URL = `${API_ROOT}/auth/token`;