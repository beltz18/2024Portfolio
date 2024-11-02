'use server'

import instance from '@lib/instance'

export const getApp = async () => await instance.get('/')