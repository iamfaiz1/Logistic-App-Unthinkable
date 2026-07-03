import Button from './Button'
import Modal from './Modal'

export default function ConfirmDialog({ isOpen, title, description, onCancel, onConfirm }) {
  return (
    <Modal isOpen={isOpen} title={title} onClose={onCancel}>
      <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
      <div className="mt-6 flex justify-end gap-2">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="button" variant="danger" onClick={onConfirm}>Confirm</Button>
      </div>
    </Modal>
  )
}
