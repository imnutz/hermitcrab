var defaultStyle = `
  :root {
    --input-border-color: #e6e6e6;
    --disable-bg-color: #eeeeee;
    --disable-color: #eeeeee;
    --error-color: #b63535;
    --error-bg-color: #fff0f0;
    --input-active-color: #295381;
    --input-focus-color: #c0d0e1;
    --btn-secondary-color: #fff;
    --btn-secondary-text-color: #295381;

    --title-font-size: 1rem;
    --title-font-weight: 600;
    --subtitle-font-size: 0.875rem;
    --subtitle-font-weight: 400;
  }

  td-uc-form {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  }

  td-uc-form,
  td-uc-form label {
    line-height: 1.5;
  }

  td-uc-form h1,
  td-uc-form h2,
  td-uc-form h3,
  td-uc-form h4,
  td-uc-form h5,
  td-uc-form h6 {
    overflow-wrap: break-word;
    font-weight: 500;
  }

  td-uc-form input,
  td-uc-form button,
  td-uc-form select,
  td-uc-form label {
    font: inherit;
  }

  td-uc-form h1 {
    font-size: 2.5rem;
  }

  td-uc-form h2 {
    font-size: 2rem;
  }

  td-uc-form h3 {
    font-size: 1.75rem;
  }

  td-uc-form h4 {
    font-size: 1.5rem;
  }

  td-uc-form h5 {
    font-size: 1.25rem;
  }

  td-uc-form h6 {
    font-size: 1rem;
  }

  td-uc-form a,
  td-uc-form a:hover {
    text-decoration: none;
  }

  td-uc-form .td-form-wrapper {
    padding: 0.9375rem;
  }

  td-uc-form .td-languages {
    display: flex;
    justify-content: flex-end;
  }

  td-uc-form input.td-text-input,
  td-uc-form input.td-email-input {
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid var(--input-border-color);
    border-radius: 0.75rem;
    transition: border-color 0.15s ease-in-out;
    padding: 0.3125rem 0.75rem;
  }
  td-uc-form input.td-text-input:focus,
  td-uc-form input.td-email-input:focus {
    box-shadow: 0 0 0 0.25rem var(--input-focus-color);
  }

  td-uc-form input.td-text-input.has-error,
  td-uc-form input.td-email-input.has-error {
    border: 1px solid var(--error-color);
    background-color: var(--error-bg-color);
  }

  td-uc-form input.td-radio-input,
  td-uc-form input.td-checkbox-input {
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid var(--input-border-color);
  }

  td-uc-form input.td-checkbox-input {
    border-radius: 0.25em;
  }

  td-uc-form input.td-radio-input {
    border-radius: 50%;
  }

  td-uc-form input.td-checkbox-input:checked {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
    background-color: var(--input-active-color);
    border-color: var(--input-active-color);
  }

  td-uc-form input.td-checkbox-input:indeterminate {
    background-image: url("data:image/svg+xml,%3Csvg width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M4.5 12.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z'/%3E%3C/svg%3E");
  }

  td-uc-form input.td-text-input:disabled,
  td-uc-form input.td-select-input:disabled,
  td-uc-form input.td-checkbox-input:disabled {
    background-color: var(--disable-bg-color);
    border-color: var(--disable-color);
  }

  td-uc-form input[type='radio']:checked {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
    background-color: var(--input-active-color);
    border-color: var(--input-active-color);
  }

  td-uc-form .td-form-actions {
    display: flex;
    gap: 0.3125rem;
    align-items: center;
  }

  td-uc-form .td-btn {
    -webkit-appearance: button;
    appearance: button;
    border-radius: 1.25rem;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  td-uc-form .td-btn:focus {
    box-shadow: 0 0 0 0.25rem var(--input-focus-color);
  }

  td-uc-form .td-primary-btn {
    background-color: var(--input-active-color);
    border: 1px solid var(--input-active-color);
  }

  td-uc-form .td-primary-btn:disabled {
    opacity: 0.3;
  }

  td-uc-form .td-secondary-btn {
    background-color: var(--btn-secondary-color);
    border-color: var(--input-active-color);
    color: var(--btn-secondary-text-color);
  }

  td-uc-form .td-borderless-btn {
    border: none;
    background: none;
    color: var(--input-active-color);
  }
  /*
   * Group layout
   */
  td-uc-form .td-group-layout {
    min-width: 21.875rem;
  }

  td-group-layout.has-error {
    border: 1px solid var(--error-color);
    background-color: var(--error-bg-color);
  }

  td-uc-form .td-group-layout > .td-layout-content {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }

  td-uc-form .td-group-layout.collapsed > .td-layout-content {
    display: none;
  }

  td-uc-form .td-group-layout.expanded > .td-layout-content {
    display: block;
  }

  td-uc-form .td-group-layout > .td-layout-content input[type='checkbox'] {
    margin-top: 0.3125rem;
  }

  td-uc-form .td-group-layout .td-layout-header {
    display: flex;
    gap: 0.3125rem;
    align-items: center;
  }

  td-uc-form .td-layout-header .td-layout-header-title {
    font-size: var(--title-font-size);
    font-weight: var(--title-font-weight);
  }

  td-uc-form .td-group-layout .td-layout-header img {
    width: 2rem;
    height: 2rem;
    border-radius: 0.1875rem;
    box-shadow: 0.0625rem 0.0625rem 0.3125rem 0 rgba(0, 0, 0, 0.25);
  }

  td-uc-form .td-group-layout .td-layout-header .toggle-icon {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1875rem;
    cursor: pointer;
    text-align: center;
    display: block;
    background-image: url("data:image/svg+xml, %3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg' color='%23aeaeae' class='inactive' %3E%3Cpath d='M6.25976 4.33658L10.0808 0.515578C10.4948 0.101578 11.1668 0.101578 11.5808 0.515578C11.9948 0.929578 11.9948 1.60158 11.5808 2.01558L6.96676 6.62958C6.57576 7.02058 5.94276 7.02058 5.55276 6.62958L0.938765 2.01558C0.524765 1.60158 0.524765 0.929578 0.938765 0.515578C1.35276 0.101578 2.02476 0.101578 2.43876 0.515578L6.25976 4.33658Z' fill='currentColor'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 0.75rem 0.4375rem;
  }

  td-uc-form .td-group-layout .td-layout-header .toggle-icon.expanded {
    background-image: url("data:image/svg+xml, %3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg' color='%23aeaeae' class='active' %3E%3Cpath d='M6 2.79133L2.179 6.61233C1.765 7.02633 1.093 7.02633 0.679 6.61233C0.265 6.19833 0.265 5.52633 0.679 5.11233L5.293 0.498328C5.684 0.107328 6.317 0.107328 6.707 0.498328L11.321 5.11233C11.735 5.52633 11.735 6.19833 11.321 6.61233C10.907 7.02633 10.235 7.02633 9.821 6.61233L6 2.79133Z' fill='currentColor'/%3E%3C/svg%3E%0A");
  }

  /*
   * Horizontal Group
   */
  td-uc-form .td-horizontal-group .td-horizontal-group-content,
  td-uc-form .td-horizontal-group {
    display: flex;
    align-items: center;
  }

  td-uc-form .td-horizontal-group {
    gap: 0.3125rem;
  }

  td-uc-form .td-horizontal-group .td-horizontal-group-content {
    gap: 0.5rem;
  }

  td-uc-form .td-horizontal-group .td-layout-header {
    flex: 1;
  }

  td-uc-form .td-horizontal-group .td-form-group {
    align-items: center;
  }

  /*
   * Vertical layout
   */
  td-uc-form .td-vertical-layout > .td-layout-content {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }

  /*
   * Horizontal layout
   */
  td-uc-form .td-horizontal-layout > .td-layout-content {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0.9375rem;
  }

  td-uc-form .td-layout-header-desc {
    font-size: var(--subtitle-font-size);
    font-weight: var(--subtitle-font-weight);
    padding: 5px 0;
    margin-bottom: 0.625rem;
  }

  td-uc-form .td-layout-footer {
    padding: 0.3125rem 0;
    margin-top: 0.625rem;
  }
  /*
   * Form
   */
  td-uc-form .td-form-group {
    display: flex;
  }

  td-uc-form .td-form-group input[type='checkbox'],
  td-uc-form .td-form-group input[type='radio'] {
    margin-right: 0.5rem;
  }

  td-uc-form .td-group-label-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  td-uc-form .td-form-group .td-control-desc {
    font-size: 0.75rem;
    color: #222222;
  }

  td-uc-form .td-form-group input[type='radio'] {
    margin-top: 0.1875rem;
  }
  td-uc-form .td-select-input {
    display: block;
    width: auto;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    font-size: 1rem;
    color: #212529;
    background-color: #fff;
    background-image: url("data:image/svg+xml, %3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg' color='%23aeaeae' class='s-inactive'%3E%3Cpath d='M6.25976 4.33658L10.0808 0.515578C10.4948 0.101578 11.1668 0.101578 11.5808 0.515578C11.9948 0.929578 11.9948 1.60158 11.5808 2.01558L6.96676 6.62958C6.57576 7.02058 5.94276 7.02058 5.55276 6.62958L0.938765 2.01558C0.524765 1.60158 0.524765 0.929578 0.938765 0.515578C1.35276 0.101578 2.02476 0.101578 2.43876 0.515578L6.25976 4.33658Z' fill='currentColor'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right 0.65rem center;
    background-size: 12px 7px;
    border: 1px solid var(--input-border-color);
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  td-uc-form .td-loading {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 40px;
  }
  td-uc-form .td-loading div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 12px;
    background: var(--input-active-color);
    animation: loading-anim 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  td-uc-form .td-loading div:nth-child(1) {
    left: 0px;
    animation-delay: -0.36s;
  }
  td-uc-form .td-loading div:nth-child(2) {
    left: 14px;
    animation-delay: -0.24s;
  }
  td-uc-form .td-loading div:nth-child(3) {
    left: 28px;
    animation-delay: -0.12s;
  }

  td-uc-form .td-loading div:nth-child(4) {
    left: 42px;
    animation-delay: 0;
  }

  @keyframes loading-anim {
    0% {
      top: 4px;
      height: 32px;
    }
    50%,
    100% {
      top: 12px;
      height: 16px;
    }
  }

  td-uc-form .td-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 1.25rem;
  }

  td-uc-form .td-panel.td-panel-error {
    color: red;
    padding-left: 1.25rem;
    border: 1px solid var(--error-color);
    background-color: var(--error-bg-color);
  }

  td-uc-form .td-panel.td-panel-success {
    padding-left: 1.25rem;
    border: 1px solid rgba(0, 255, 0, 0.7);
    background-color: rgba(0, 255, 0, 0.3);
  }
`;
