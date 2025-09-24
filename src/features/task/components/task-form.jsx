import { ActionButton } from "shared/components/ui/buttons/action-button";
import { FormField } from "shared/components/ui/form/form-field";
import { ShadowBlock } from "shared/components/ui/blocks/shadow-block";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const selectOptions = [
  {
    id: "low",
    text: "Низкий",
  },
  {
    id: "medium",
    text: "Средний",
  },
  {
    id: "high",
    text: "Высокий",
  },
];

export const TaskForm = ({
  className = "",
  initialData = undefined,
  onSubmitForm,
  submitButton,
}) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: initialData?.title || "",
      description: initialData?.description || "",
      priority: initialData?.priority || "low",
      deadline: dayjs(initialData?.deadline).format("YYYY-MM-DD") || "",
    },
  });
  const onSubmit = (data) => {
    const formData = {
      ...data,
    };
    onSubmitForm(formData);
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <ShadowBlock className={"space-y-3 p-5 sm:space-y-5 sm:p-8"}>
        <FormField label="Название задачи *">
          <input
            className="form-item-common"
            placeholder="Введите название задачи"
            type="text"
            {...register("name", { required: true })}
          />
        </FormField>
        <FormField label="Описание">
          <textarea
            className="form-item-common resize-none"
            rows={4}
            placeholder="Опишите детали задачи"
            {...register("description")}
          ></textarea>
        </FormField>
        <div className="flex flex-col gap-5 *:grow sm:flex-row">
          <FormField label="Приоритет">
            <select className="form-item-common" {...register("priority")}>
              {selectOptions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.text}
                </option>
              ))}
            </select>
          </FormField>
          <FormField label="Дедлайн *">
            <input
              className="form-item-common"
              type="date"
              {...register("deadline", { required: true })}
            />
          </FormField>
        </div>
        <div>
          <ActionButton
            className="mt-10 w-full"
            variant={"default"}
            type="submit"
            onClick={() => navigate("/task-list")}
          >
            {submitButton}
          </ActionButton>
        </div>
      </ShadowBlock>
    </form>
  );
};
