import jwt from 'jsonwebtoken'
import config from '../../config'


export default  function hashToken(payload){    
   const token = jwt.sign({
        payload
      }, config.secret)

    return token 
} 