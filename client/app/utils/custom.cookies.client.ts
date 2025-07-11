
export const createClientSideCookie = (
    key: string,
    value: string,
    options: {
      maxAge?: number;
      sameSite?: 'strict'| 'none';
      path?: string;
    } = {}
  ): void => {
    const { maxAge, sameSite = 'Strict', path = '/' } = options;
    const secure = process.env.NEXT_PUBLIC_ENV_TYPE !== "sandbox";
    let cookieString = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=${path}; `;
    
    if (maxAge) {
      cookieString += `max-age=${maxAge}; `;
    }
  
    if (secure) {
      cookieString += 'Secure; ';
    }
  
    cookieString += `SameSite=${sameSite};`;
  
    // Set the cookie
    document.cookie = cookieString;
  };
  
  // Function to get the value of a client-side cookie by key
  export const getClientSideCookie = (key: string): string | undefined => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return undefined;
      }
      const name = `${encodeURIComponent(key)}=`;
      const decodedCookies = decodeURIComponent(document.cookie);
      const cookiesArray = decodedCookies.split(';');
    for (let cookie of cookiesArray) {
      cookie = cookie.trim();
      if (cookie.startsWith(name)) {
        return cookie.substring(name.length);
      }
    }
  
    return undefined; // Cookie not found
  };
  
  // Function to delete a client-side cookie by key
  export const deleteClientSideCookie = (key: string, options: { path?: string } = {}): void => {
    const { path = '/' } = options;
  
    // Setting the max-age to 0 will remove the cookie
    document.cookie = `${encodeURIComponent(key)}=; path=${path}; max-age=0;`;
  };

  // Function to check if a cookie exists
export const hasCookie = (key: string): boolean => {
    const name = `${encodeURIComponent(key)}=`;
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookies.split(';');

    for (let cookie of cookiesArray) {
      cookie = cookie.trim();
      if (cookie.startsWith(name)) {
        return true;
      }
    }
  
    return false;
  };
  
  