import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  cartItemsShoping:[],
  cartItemsWhishList:[],
  userInfo:{
    fullName:"",
    emailorphone:"",
    password:"",
    isAuthenticated: false,
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.cartItems = action.payload
    },
    resgisterProfile:(state,action)=>{
      state.userInfo.emailorphone =  action.payload.emailorphone
      state.userInfo.password = action.payload.password
      state.userInfo.fullName = action.payload.fullName
    },
    signIn: (state, action) => {
      if (
        state.userInfo.emailorphone === action.payload.emailorphone &&
        state.userInfo.password === action.payload.password
      ) {
        state.userInfo.isAuthenticated = true; // Mark user as logged in
      }else{
        alert("Wrong Email Or Password !")
      }
    },
    addToCart:(state,action)=>{
      state.cartItemsShoping.push(action.payload)
    },
    addToWhishList:(state,action)=>{
      state.cartItemsWhishList.push(action.payload)
    },
    removeFromWishlist: (state, action) => {
      state.cartItemsWhishList = state.cartItemsWhishList.filter(
        (item) => item.nameProduct !== action.payload
      );
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProductDetails , resgisterProfile , signIn , addToCart , addToWhishList , removeFromWishlist} = counterSlice.actions

export default counterSlice.reducer