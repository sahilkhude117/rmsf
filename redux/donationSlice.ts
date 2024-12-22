import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfo {
    firstName: string;
    lastName: string;
    email: string;
    address:string;
    city:string;
    state:string;
    country:string;
    postalCode:string;
    anonymous: boolean;
    agreed: boolean;
    isComment:boolean;
    comment:string,
    includeProcessing:boolean,
}

interface CardDetails {
    cardNumber: string;
    expiryDate: string;
    cvc: string;
    billingZip: string;
}

export enum DONATION_TYPE {
    ONE_TIME,
    MONTHLY
}

interface DonationState {
    donationType: DONATION_TYPE;
    amount: number;
    customAmount: string;
    campaign: string;
    userInfo: UserInfo;
    paymentMethod: PAYMENT_METHOD;
    cardDetails: CardDetails;
}

export enum PAYMENT_METHOD {
    CARD,
    RAZORPAY
}


const initialState: DonationState = {
    donationType: DONATION_TYPE.ONE_TIME,
    amount: 0,
    customAmount: '',
    campaign: '',
    userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
        anonymous: false,
        agreed: false,
        isComment:false,
        comment:'',
        includeProcessing : false
    },
    paymentMethod:PAYMENT_METHOD.RAZORPAY,
    cardDetails: {
        cardNumber:'',
        expiryDate:'',
        cvc:'',
        billingZip: '',
    },
};

const donationSlice = createSlice({
    name: 'donation',
    initialState,
    reducers : {
        setDonationType(state, action: PayloadAction<DONATION_TYPE>){
            state.donationType = action.payload;
        },
        setAmount(state, action: PayloadAction<number>){
            state.amount = action.payload;
        },
        setCustomAmount(state, action: PayloadAction<string>){
            state.customAmount = action.payload;
        },
        setCampaign(state, action: PayloadAction<string>){
            state.campaign = action.payload;
        },
        setUserInfo(state, action: PayloadAction<Partial<UserInfo>>){
            state.userInfo = { ...state.userInfo, ...action.payload };
        },
        setPaymentMethod(state, action: PayloadAction<PAYMENT_METHOD>){
            state.paymentMethod = action.payload;
        },
        setCardDetails(state, action: PayloadAction<Partial<CardDetails>>){
            state.cardDetails = { ...state.cardDetails, ...action.payload }
        },
        resetState(){
            return initialState;
        },
    },
});

export const {
    setDonationType,
    setAmount,
    setCustomAmount,
    setCampaign,
    setUserInfo,
    setPaymentMethod,
    setCardDetails,
    resetState
} = donationSlice.actions;

export default donationSlice.reducer;