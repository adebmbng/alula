import {Banner} from './general';

export interface APIResponse<T> {
  data: T;
  code: number;
  message: 'success' | 'error';
}

// --- AUTH
export type LoginRequest = APIResponse<unknown>;
export type LoginResponse = APIResponse<unknown>;

export type RegisterRequest = APIResponse<unknown>;
export type RegisterResponse = APIResponse<unknown>;

export type ForgotPasswordRequest = APIResponse<unknown>;
export type ForgotPasswordResponse = APIResponse<unknown>;
// ---

// --- CATEGORY
export type GetCategoryListRequest = APIResponse<unknown>;
export type GetCategoryListResponse = APIResponse<unknown>;

export type GetTagListRequest = APIResponse<unknown>;
export type GetTagListResponse = APIResponse<unknown>;
// ---

// PRODUCT
export type GetProductListRequest = APIResponse<unknown>;
export type GetProductListResponse = APIResponse<unknown>;

export type GetProductDetailRequest = APIResponse<unknown>;
export type GetProductDetailResponse = APIResponse<unknown>;
// ---

// --- MERCHANT
export type GetMerchantListRequest = APIResponse<unknown>;
export type GetMerchantListResponse = APIResponse<unknown>;

// --- CHECKOUT
export type UploadImageRequest = APIResponse<unknown>;
export type UploadImageResponse = APIResponse<unknown>;

export type CreatePrintOrderRequest = APIResponse<unknown>;
export type CreatePrintOrderResponse = APIResponse<unknown>;

export type GetAddresstRequest = APIResponse<unknown>;
export type GetAddresstResponse = APIResponse<unknown>;

export type CalculateShippingRequest = APIResponse<unknown>;
export type CalculateShippingResponse = APIResponse<unknown>;

export type GetRegionRequest = APIResponse<unknown>;
export type GetRegionResponse = APIResponse<unknown>;

export type SearchPromoCodeRequest = APIResponse<unknown>;
export type SearchPromoCodeResponse = APIResponse<unknown>;

export type FinishOrderRequest = APIResponse<unknown>;
export type FinishOrderResponse = APIResponse<unknown>;
// ---

// --- ORDER
export type GetOrderHistoryRequest = APIResponse<unknown>;
export type GetOrderHistoryResponse = APIResponse<unknown>;

export type GetOrderDetailRequest = APIResponse<unknown>;
export type GetOrderDetailResponse = APIResponse<unknown>;
// ---

// --- PROFILE
export type GetProfileRequest = APIResponse<unknown>;
export type GetProfileResponse = APIResponse<unknown>;

export type UpdateProfileRequest = APIResponse<unknown>;
export type UpdateProfileResponse = APIResponse<unknown>;

// --- GENERAL
export type SearchLocationRequest = APIResponse<unknown>;
export type SearchLocationResponse = APIResponse<unknown>;

export type GetBannerListResponse = APIResponse<{item: Banner}[]>;
// ---
