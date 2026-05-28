import { CheckCircle2, X } from 'lucide-react';
import './ActionNotice.css';

export function ActionNotice({ notice, onClose }) {
  if (!notice) return null;

  return (
    <div className="action-notice" role="status">
      <CheckCircle2 size={20} />
      <div>
        <strong>{notice.title}</strong>
        <p>{notice.message}</p>
      </div>
      <button type="button" className="notice-close" onClick={onClose} aria-label="Fermer">
        <X size={16} />
      </button>
    </div>
  );
}
