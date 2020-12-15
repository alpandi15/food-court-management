export default function validate ({
  new_password,
  confirm_password,
  old_password
}) {
  const error = {
    old_password: !old_password ? '*Required'
    : old_password.length < 6 ? 'Password Min 6 Character'
    : old_password.length > 50 ? 'Password Max 50 Character'
    : undefined,
    new_password: !new_password ? '*Required'
    : new_password.length < 6 ? 'Password Min 6 Character'
    : new_password.length > 50 ? 'Password Max 50 Character'
    : undefined,
    confirm_password: !confirm_password ? '*Required'
    : confirm_password !== new_password ? 'Password tidak sama'
    : confirm_password.length > 50 ? 'Password Max 50 Character'
    : undefined
  }

  return error
}
