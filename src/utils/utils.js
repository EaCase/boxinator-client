export const getTokenFields = (response) => {
  const data =
  {
    accessToken: response.accessToken,
    refreshToken: response.refreshToken,
    accountType: response.accountType
  }

  return data
}

export const getShipmentFields = (values) => {
  const data =
  {
    boxTierId: values.tier.id,
    countryId: values.country.id,
    recipient: values.recipient,
    boxColor: values.color,
  }

  return data
}