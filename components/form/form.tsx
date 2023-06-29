import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import type {
	DeepPartial,
	FieldValues,
	Path,
	SubmitHandler,
	UnpackNestedValue,
	UseFormProps,
	UseFormReturn
} from 'react-hook-form'
import {
	FormProvider,
	useForm,
	useFormContext,
	useWatch
} from 'react-hook-form'
import type { ZodType } from 'zod'

type ServerErrors<T> = {
	[Property in keyof T]: string
}
interface FormProps<TFormValues extends FieldValues> {
	onSubmit: SubmitHandler<TFormValues>
	children: (methods: UseFormReturn<TFormValues>) => React.ReactNode
	useFormProps?: UseFormProps<TFormValues>
	validationSchema?: ZodType
	serverError?: ServerErrors<Partial<TFormValues>> | null
	resetValues?:
		| UnpackNestedValue<DeepPartial<TFormValues>>
		| UnpackNestedValue<TFormValues>
		| null
	className?: string
	form?: boolean
	[key: string]: unknown
}

export const Form = <
	TFormValues extends Record<string, unknown> = Record<string, unknown>
>({
	onSubmit,
	children,
	useFormProps,
	validationSchema,
	serverError,
	resetValues,
	form = true,
	className
}: FormProps<TFormValues>) => {
	const methods = useForm<TFormValues>({
		...(!!validationSchema && { resolver: zodResolver(validationSchema) }),
		...(!!useFormProps && useFormProps)
	})
	useEffect(() => {
		if (serverError) {
			Object.entries(serverError).forEach(([key, value]) => {
				methods.setError(key as Path<TFormValues>, {
					type: 'manual',
					message: value
				})
			})
		}
	}, [serverError, methods])

	useEffect(() => {
		if (resetValues) {
			methods.reset(resetValues as TFormValues)
		}
	}, [resetValues, methods])
	return (
		<FormProvider {...methods}>
			{form ? (
				<form
					onSubmit={methods.handleSubmit(onSubmit)}
					noValidate
					className={className ?? ''}
				>
					{children(methods)}
				</form>
			) : (
				<> {children(methods)}</>
			)}
		</FormProvider>
	)
}

export const useFormValues = <T extends FieldValues>() => {
	const { getValues } = useFormContext<T>()

	return {
		...useWatch(), // subscribe to form value updates
		...getValues() // always merge with latest form values
	}
}
