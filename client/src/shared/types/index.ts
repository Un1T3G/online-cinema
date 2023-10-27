import { NextPage } from 'next'

export type TTypeRoles = { isOnlyAdmin?: boolean; isOnlyUser?: boolean }

export type TNextPageAuth<P = {}> = NextPage<P> & TTypeRoles

export type TTypeComponentAuthFields = { Component: TTypeRoles }
