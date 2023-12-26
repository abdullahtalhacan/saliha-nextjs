import { z } from 'zod'

const schema = z.object({
    name: z.string().min(3),
    surname: z.string().min(2),
    email: z.string().email(),
    phone: z.string(),
    gender: z.string(),
    age: z.string().refine((val) => val !== '65+' ? (parseInt(val) >= 10 && parseInt(val) <= 65) : true, {
        message: 'Age must be between 10 to 65 or "65+".',
    }),
    date: z.object({
        day: z.number().min(1).max(31),
        month: z.number().min(1).max(12),
        year: z.coerce.number() 
        .int() 
        .gte(1000)
        .lte(9999)
    }),
    time: z.string(),
    agreement: z.boolean()
})

export default schema