// src/lib/fetch-json.ts
export async function fetchJson<T = unknown>(
  input: string,
  init?: RequestInit
): Promise<{ ok: boolean; data: T | null; status: number; error?: string }> {
  try {
    const res = await fetch(input, init);
    const text = await res.text();          // read raw first
    if (!text) {
      return {
        ok: res.ok,
        data: null,
        status: res.status,
        error: res.ok ? "Empty response" : `HTTP ${res.status}`,
      };
    }
    try {
      const data = JSON.parse(text) as T;
      return { ok: res.ok, data, status: res.status };
    } catch {
      return {
        ok: false,
        data: null,
        status: res.status,
        error: "Invalid JSON in response",
      };
    }
  } catch (e) {
    return {
      ok: false,
      data: null,
      status: 0,
      error: e instanceof Error ? e.message : "Network error",
    };
  }
}