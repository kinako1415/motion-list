import styles from "./Input.module.css";

interface InputProps {
  label: string;
  register: any;
  fieldName: string;
}

export const Input = ({ label, register, fieldName }: InputProps) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} {...register(fieldName)} />;
    </div>
  );
};
