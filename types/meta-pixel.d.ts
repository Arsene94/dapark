export {};

type FbqLeadParams = {
    value?: number;
    currency?: string;
};

type FbqCustomParams = Record<string, string | number | boolean | null>;

type FbqArgs =
    | ["init", string]
    | ["consent", "grant" | "revoke"]
    | ["track", "PageView"]
    | ["track", "Lead"]
    | ["track", "Lead", FbqLeadParams]
    | ["track", "Lead", FbqLeadParams, { eventID?: string }]
    | ["trackCustom", string]
    | ["trackCustom", string, FbqCustomParams];

type Fbq = (...args: FbqArgs) => void;

declare global {
    interface Window {
        fbq?: Fbq;
    }
}
