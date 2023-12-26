import { z } from 'zod'

const schema = z.object({
    email: z.string().email(),
    verifyCode: z.string().min(6).max(6)
})

export default schema