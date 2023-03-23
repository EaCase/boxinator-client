export const getTokenFields = (response) => {
  const data =
  {
    accessToken: response.accessToken,
    refreshToken: response.refreshToken,
    role: response.accountType
  }

  return data
}