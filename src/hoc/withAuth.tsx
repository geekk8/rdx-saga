import React, { useEffect, useState } from 'react'

const withAuth =
  (isAdmin: boolean) => (WrapperComponent?: any | React.ComponentType<any>) => {
    const Component = () => {
      const [admin, setAdmin] = useState<string>('')

      useEffect(() => {
        if (isAdmin) {
          setAdmin('isAdmin true / 관리자가 맞습니다.')
        } else {
          setAdmin('isAdmi false / 관리자가 아닙니다.')
        }
      }, [])

      return <WrapperComponent admin={admin} />
    }
    return Component
  }

export default withAuth
