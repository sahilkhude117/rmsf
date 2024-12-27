import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfo {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: number;
  anonymous: boolean;
  agreed: boolean;
  isComment: boolean;
  comment: string;
  includeProcessing: boolean;
}

interface CardDetails {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  billingZip: string;
}

interface DonationState {
  id: number;
  donationType: string;
  customAmount: Number;
  campaign: string;
  userInfo: UserInfo;
  paymentMethod: PAYMENT_METHOD;
  cardDetails: CardDetails;
}

export enum PAYMENT_METHOD {
  CARD,
  RAZORPAY,
}

const initialState: DonationState = {
  id: 0,
  donationType: 'ONE_TIME',
  customAmount: 0,
  campaign: 'education',
  userInfo: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: 'India',
    postalCode: 0,
    anonymous: false,
    agreed: false,
    isComment: false,
    comment: '',
    includeProcessing: false,
  },
  paymentMethod: PAYMENT_METHOD.RAZORPAY,
  cardDetails: {
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    billingZip: '',
  },
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    setDonationType(state, action: PayloadAction<string>) {
      state.donationType = action.payload;
    },
    setCustomAmount(state, action: PayloadAction<number>) {
      state.customAmount = action.payload;
    },
    setCampaign(state, action: PayloadAction<string>) {
      state.campaign = action.payload;
    },
    setUserInfo(state, action: PayloadAction<Partial<UserInfo>>) {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    setPaymentMethod(state, action: PayloadAction<PAYMENT_METHOD>) {
      state.paymentMethod = action.payload;
    },
    setCardDetails(state, action: PayloadAction<Partial<CardDetails>>) {
      state.cardDetails = { ...state.cardDetails, ...action.payload };
    },
    setDonationId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    resetState() {
      return initialState;
    },
  },
});

export const {
  setDonationType,
  setCustomAmount,
  setCampaign,
  setUserInfo,
  setPaymentMethod,
  setCardDetails,
  setDonationId,
  resetState,
} = donationSlice.actions;

export default donationSlice.reducer;
