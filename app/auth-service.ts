import { configureTnsOAuth, TnsOAuthClient, ITnsOAuthTokenResult } from "nativescript-oauth2";

import {
  TnsOaProvider,
  TnsOaProviderOptionsGoogle,
  TnsOaProviderGoogle,

} from "nativescript-oauth2/providers";
let client: TnsOAuthClient = null
export function configureOAuthProviders() {
  const googleProvider = configureOAuthProviderGoogle()

  configureTnsOAuth([googleProvider])
}

function configureOAuthProviderGoogle() {

  const googleProviderOptions: TnsOaProviderOptionsGoogle = {
    openIdSupport: "oid-full",
    clientId: '1081796502374-qkijsbgvljkb70b86jioin5snq58utvl.apps.googleusercontent.com',
    redirectUri: 'com.googleusercontent.apps.1081796502374-qkijsbgvljkb70b86jioin5snq58utvl:/auth',
    urlScheme: 'com.googleusercontent.apps.1081796502374-qkijsbgvljkb70b86jioin5snq58utvl',
    scopes: ['email']
  }

  const googleProvider = new TnsOaProviderGoogle(googleProviderOptions)
  return googleProvider
}

export function tnsOauthLogin(providerType) {
  client = new TnsOAuthClient(providerType)
  client.loginWithCompletion((tokenResult: ITnsOAuthTokenResult, error) => {
    if (error) {
      console.error('Ошибка авторизации')
      console.log(error)
    }
    else {
      console.log('Succes')
      console.log(tokenResult);
    }
  })

}