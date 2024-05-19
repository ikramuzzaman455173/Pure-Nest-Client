"use client";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

const BCFormProvider = ({ children, onSubmit }: TFormProps) => {
  const methods = useForm();

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default BCFormProvider;
