import { AddBox, Factory, LocalShipping, AssignmentTurnedIn, DisabledByDefault, HelpCenter } from '@mui/icons-material';

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

export const StatusIcon = ({ status }) => {
  switch (status) {
    case "CREATED": return AddBox
    case "RECEIVED": return Factory
    case "INTRANSIT": return LocalShipping
    case "COMPLETED": return AssignmentTurnedIn
    case "CANCELLED": return DisabledByDefault
    default: return HelpCenter
  }
}

export const statusOptions = [
  "COMPLETED", "INTRANSIT", "RECEIVED", "CREATED", "CANCELLED"
]
