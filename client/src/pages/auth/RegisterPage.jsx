import { zodResolver } from '@hookform/resolvers/zod'
import { Truck } from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import Button from '../../components/common/Button'
import ErrorState from '../../components/common/ErrorState'
import FormInput from '../../components/forms/FormInput'
import { useAuthStore } from '../../store/authStore'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export default function RegisterPage() {
  const navigate = useNavigate()
  
  // Note: I renamed the store's register function to 'registerUser' 
  // so it does not mix up with the 'register' function from react-hook-form.
  const { isAuthenticated, dashboardPath, register: registerUser, isLoading, error } = useAuthStore()
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', password: '' },
  })

  // Send the user away if they are already logged in
  if (isAuthenticated) return <Navigate to={dashboardPath()} replace />

  const onSubmit = async (values) => {
    try {
      await registerUser(values)
      toast.success('Account created successfully')
      navigate('/login') 
    } catch {
      toast.error('Registration failed')
    }
  }

  return (
    <div>
      {/* Header Section */}
      <div className="mb-8 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-700 text-white">
          <Truck className="h-5 w-5" />
        </span>
        <div>
          <h1 className="text-xl font-black text-slate-950 dark:text-white">Unstopable Logistics</h1>
          <p className="text-sm text-slate-500">Create your command center account</p>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4">
          <ErrorState message={error} />
        </div>
      )}

      {/* Form Section */}
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormInput 
          label="Name" 
          type="text" 
          registration={register('name')} 
          error={errors.name} 
        />
        <FormInput 
          label="Email" 
          type="email" 
          registration={register('email')} 
          error={errors.email} 
        />
        <FormInput 
          label="Password" 
          type="password" 
          registration={register('password')} 
          error={errors.password} 
        />
        <Button type="submit" isLoading={isLoading}>
          Create account
        </Button>
      </form>
    </div>
  )
}
