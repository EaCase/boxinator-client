import { createAction } from "@reduxjs/toolkit"

// these are needed to solve circular dependency problem between modules
export const tokensReceived = createAction('tokensReceived')
export const logout = createAction('logout')
