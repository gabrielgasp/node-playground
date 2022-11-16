import { z, ZodError } from "zod";
// import express from "express";

// const app = express();

// app.use(express.json());

// app.post(
//   '/xablau',
//   (req: express.Request, res: express.Response) => {
//     try {
//       const data = new User(req.body)
//       res.status(200).json(data);
//     } catch (error) {
//       if (error instanceof Error) {
//         res.status(400).json({ error: error.message });
//       }
//     }
//   }
// )

// const Experience = z.object({
//   lang: z.string(),
//   years: z.number().positive(),
// });

// const UserSchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   confirmEmail: z.string().email(),
//   role: z.enum(["Senior Engineer", "Staff Engineer", "Engineering Manager"]),
//   websiteUrl: z.string().url().optional(),
//   available: z.boolean(),
//   experience: z.array(Experience),
// })
// .refine((data) => data.email === data.confirmEmail, {
//   message: "Email and confirmEmail should be equal",
//   path: ["confirmEmail"],
// });

// type TUser = z.infer<typeof UserSchema>;

// // const validate = (rawData: any) => {
// //   try {
// //     const data = UserSchema.parse(rawData);
// //     return { sucsess: true, data };
// //   } catch (error) {
// //     if (error instanceof ZodError) {
// //       return { success: false, error: error.flatten() };
// //     }
// //   }
// // }

// class User implements TUser {
//   name: string;
//   email: string;
//   confirmEmail: string
//   role: "Senior Engineer" | "Staff Engineer" | "Engineering Manager";
//   websiteUrl?: string
//   available: boolean
//   experience: {
//     lang: string;
//     years: number;
//   }[]

//   constructor(props: unknown) {
//     const data = UserSchema.parse(props);

//     this.name = data.name;
//     this.email = data.email;
//     this.confirmEmail = data.confirmEmail;
//     this.role = data.role;
//     this.websiteUrl = data.websiteUrl;
//     this.available = data.available;
//     this.experience = data.experience;
//   }
// }

// /*
// {
//   "name": "Leigh Halliday",
//   "email": "leigh@email.com",
//   "confirmEmail": "leigh@email.com",
//   "role": "Senior Engineer",
//   "websiteUrl": "https://www.leighhalliday.com",
//   "available": true,
//   "experience": [
//     { "lang": "PHP", "years": 15 },
//     { "lang": "Ruby", "years": 10 },
//     { "lang": "React", "years": 5 }
//   ],
//   "coupon": "ABCD123"
// }
// */

// app.listen(3000, () => console.log("Example app listening on port 3000!"));

const createUserSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be a string",
      required_error: "Name is required",
    })
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name must be at most 50 characters long"),
  age: z
    .number({
      invalid_type_error: "Age must be a number",
      required_error: "Age is required",
    })
    .int("Age must be an integer")
    .min(18, "You must be at least 18 years old")
    .max(100, "You must be at most 100 years old"),
  email: z
    .string({
      invalid_type_error: "Email must be a string",
      required_error: "Email is required",
    })
    .email("Email must be a valid email address"),
});

const input = {
  name: "Leigh",
  age: '30',
  email: "test@test.com",
  unknownKey: "unknown",
};

function createUser (input: unknown) {
  const inputParseResult = createUserSchema.safeParse(input);
  
  if (!inputParseResult.success) {
    return { success: false, error: inputParseResult.error.issues };
  }

  const data = inputParseResult.data;
  // here would be the logic to create the user, save to db, etc...
  return { success: true, data };
}

const result = createUser(input);

if (result.success) {
  console.log(result.data);
} else {
  console.log(result.error);
}
