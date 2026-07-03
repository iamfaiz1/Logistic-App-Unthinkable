import { zodResolver } from '@hookform/resolvers/zod'
import { Truck } from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import Button from '../../components/common/Button'
import ErrorState from '../../components/common/ErrorState'
import FormCheckbox from '../../components/forms/FormCheckbox'
import FormInput from '../../components/forms/FormInput'
import { useAuthStore } from '../../store/authStore'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(1, 'Password is required'),
  remember: z.boolean().optional(),
})

export default function LoginPage() {
  const navigate = useNavigate()
  const { isAuthenticated, dashboardPath, login, isLoading, error } = useAuthStore()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '', remember: true },
  })

  if (isAuthenticated) return <Navigate to={dashboardPath()} replace />

  const onSubmit = async (values) => {
    try {
      await login(values)
      toast.success('Welcome back')
      navigate(useAuthStore.getState().dashboardPath(), { replace: true })
    } catch {
      toast.error('Login failed')
    }
  }

  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-600 text-white"><Truck className="h-5 w-5" /></span>
        <div>
          <h1 className="text-xl font-black text-slate-950">Unstopable Logistics</h1>
          <p className="text-sm text-slate-500">Sign in to your command center</p>
        </div>
      </div>
      {error && <div className="mb-4"><ErrorState message={error} /></div>}
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Email" type="email" registration={register('email')} error={errors.email} />
        <FormInput label="Password" type="password" registration={register('password')} error={errors.password} />
        <FormCheckbox label="Keep me signed in" registration={register('remember')} />
        <Button type="submit" isLoading={isLoading}>Sign in</Button>
      </form>
    </div>
  )
}
