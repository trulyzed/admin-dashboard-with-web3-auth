import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { Web3Auth } from '@web3auth/modal'
import { CHAIN_NAMESPACES, SafeEventEmitterProvider, UserInfo } from '@web3auth/base'
import RPC from '~/web3RPC'

const clientId = 'BHVRAW2XCuOzyjPJQ1TTSbKOWs5T10vJnJKfiSnm3_dtfpfewyx9Wg49WqEIKICgqzMvzV_lGkAwS1aDp8NpHwY'

interface IAuthContextValue {
  initializing: boolean
  loading: boolean
  provider: SafeEventEmitterProvider | null
  authenticated: boolean
  login: () => Promise<void>
  getUserInfo: () => Promise<Partial<UserInfo>>
  logout: () => Promise<void>
  getBalance: () => Promise<void>
}

export const AuthContext = createContext<IAuthContextValue>({
  initializing: true,
  loading: false,
  provider: null,
  authenticated: false,
  login: async () => {},
  getUserInfo: async () => Promise.resolve({}),
  logout: async () => {},
  getBalance: async () => {}
})

interface IAuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [initializing, setInitializing] = useState(true)
  const [loading, setLoading] = useState(false)
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null)
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null)
  const authenticated = useMemo(() => !initializing && !!provider, [provider, initializing])

  useEffect(() => {
    const init = async () => {
      setInitializing(true)
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x1',
            rpcTarget: 'https://rpc.ankr.com/eth' // This is the public RPC we have added, please pass on your own endpoint while creating an app
          }
        })

        setWeb3auth(web3auth)

        await web3auth.initModal()
        if (web3auth.provider) {
          setProvider(web3auth.provider)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setInitializing(false)
      }
    }

    init()
  }, [])

  const login = useCallback(async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    setLoading(true)
    const web3authProvider = await web3auth.connect()
    setLoading(false)
    setProvider(web3authProvider)
  }, [web3auth])

  const getUserInfo = useCallback(async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet')
      return Promise.resolve({})
    }
    setLoading(true)
    const user = await web3auth.getUserInfo()
    setLoading(false)
    return user
  }, [web3auth])

  const logout = useCallback(async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    setLoading(true)
    await web3auth.logout()
    setLoading(false)
    setProvider(null)
  }, [web3auth])

  const getBalance = useCallback(async () => {
    if (!provider) {
      console.log('provider not initialized yet')
      return
    }
    const rpc = new RPC(provider)
    const balance = await rpc.getBalance()
    console.log(balance)
  }, [provider])

  return (
    <AuthContext.Provider
      value={{
        initializing,
        loading,
        provider,
        authenticated,
        login,
        getUserInfo,
        logout,
        getBalance
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
