import { UnmovableContainer } from "@shared/components/Container";
import FormInput from "@shared/components/FormInput";
import {
  AuthForm,
  DEFAULT_LOGIN_FORM,
  authFormValidationRules,
} from "./typesAndData";
import { useFormWithValidation } from "@shared/hooks/useForm";
import { ButtonPrimary } from "@shared/components/Buttons";
import { useAuth } from "./api/useAuth";
import { useState } from "react";
import Select from "@shared/components/Select";

export default function Auth() {
  const { formValues, handleChange, errors, isValid } =
    useFormWithValidation<AuthForm>(
      DEFAULT_LOGIN_FORM,
      authFormValidationRules
    );
  const { getDatabaseList, login } = useAuth();
  const [databaseList, setDatabaseList] = useState<string[]>([]);
  const shouldSelectADatabase = databaseList.length > 0;
  const handleSubmit = async () => {
    isValid();
    if (!shouldSelectADatabase) handleDb();
    else handleLogin();
  };
  const handleDb = async () => {
    const dbList = await getDatabaseList(formValues.url);
    if (dbList) setDatabaseList(dbList);
  };
  const handleLogin = () => {
    isValid() && login(formValues);
  };
  return (
    <UnmovableContainer style={{ paddingHorizontal: 15 }}>
      <FormInput
        value={formValues.url}
        setValue={(input) => handleChange("url", input)}
        label="Url"
        placeholder="Enter url"
        autoCapitalize="none"
        keyboardType="url"
        error={errors.url}
      />
      <FormInput
        value={formValues.username}
        setValue={(input) => handleChange("username", input)}
        label="Username"
        placeholder="Enter username"
        autoCapitalize="none"
        error={errors.username}
      />
      <FormInput
        value={formValues.password}
        setValue={(input) => handleChange("password", input)}
        label="Password"
        placeholder="Enter password"
        error={errors.password}
      />
      {shouldSelectADatabase && (
        <Select<string>
          value={formValues.db}
          data={databaseList}
          setValue={(input) => handleChange("db", input)}
          label="Database"
          placeholder="Select a database"
          error={errors.db}
          renderValue={(value) => value}
        />
      )}
      <ButtonPrimary
        style={{ marginTop: 30 }}
        onPress={handleSubmit}
      >
        {shouldSelectADatabase ? "Login" : "Continue"}
      </ButtonPrimary>
    </UnmovableContainer>
  );
}
