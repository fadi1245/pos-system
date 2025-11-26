export type CursorResult<T> = {
    items: T[];
    nextCursor: string | null;
  };
  
  export const extractCursorFromDocs = (docs: any[]) => {
    if (!docs || docs.length === 0) return null;
    const last = docs[docs.length - 1];
    return last._id ? String(last._id) : null;
  };
  