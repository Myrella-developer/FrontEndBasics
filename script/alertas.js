document.body.insertAdjacentHTML('beforeend', `
  <div id="notification-container" style="position: fixed; top: 20px; right: 20px; z-index: 1050;"></div>
`);

function showNotification(message = 'Notificación') {
  const notification = document.createElement('div');
  notification.classList.add('alert', 'alert-success', 'fade', 'show');
  notification.textContent = `✔️ ${message}`;
  document.getElementById('notification-container').appendChild(notification);
  setTimeout(() => {
    notification.classList.remove('show');
    notification.classList.add('hide');
    notification.addEventListener('transitionend', () => notification.remove());
  }, 3000);
}

function showModalAlert(message = 'Ocurrió un error') {
  const modalHTML = `
    <div class="modal fade" id="alertModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Alerta</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div class="modal-body">⚠️ ${message}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  const alertModal = new bootstrap.Modal(document.getElementById('alertModal'));
  alertModal.show();
  document.getElementById('alertModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('alertModal').remove();
  });
}

document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('exampleInputEmail1').value.trim();
  
  if (name === '' || email === '') {
    showModalAlert('Por favor, complete los campos obligatorios.');
  } else {
    showNotification('¡Formulario enviado correctamente!');
    document.querySelector('form').reset();
  }
});
