import { ConfigureMediaQueryOptions, MediaQueries, MediaQueryObject, MediaQueryState } from '../types';
export declare const mediaState: MediaQueryState;
export declare const addMediaQueryListener: (key: string, cb: any) => void;
export declare const removeMediaQueryListener: (key: string, cb: any) => void;
export declare const mediaQueryConfig: MediaQueries;
export declare const getMedia: () => MediaQueryState;
export declare const configureMedia: ({ queries, defaultActive, }?: ConfigureMediaQueryOptions) => void;
export declare const useMedia: () => {
    [x: string]: boolean;
};
export declare function mediaObjectToString(query: string | MediaQueryObject): string;
//# sourceMappingURL=useMedia.d.ts.map