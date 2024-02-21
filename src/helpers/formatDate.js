export default function formatarDate(date) {
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

    if (!regex.test(date)) {
      return ''
    }

    const dataHora = new Date(date);
    const hora = ("0" + dataHora.getHours()).slice(-2);
    const minuto = ("0" + dataHora.getMinutes()).slice(-2);
    const segundo = ("0" + dataHora.getSeconds()).slice(-2);
    
    return `${hora}:${minuto}:${segundo}`;
  }