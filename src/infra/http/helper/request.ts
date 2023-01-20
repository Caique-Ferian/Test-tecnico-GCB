import { XMLHttpRequest } from 'xhr2';
export interface RequestResult {
  ok: boolean;
  status: number;
  statusText: string;
  data: string;
  headers: string;
}
function parseXHRResult(xhr: XMLHttpRequest): RequestResult {
  return {
    ok: xhr.status >= 200 && xhr.status < 300,
    status: xhr.status,
    statusText: xhr.statusText,
    headers: xhr.getAllResponseHeaders(),
    data: xhr.responseText,
  };
}

function errorResponse(
  xhr: XMLHttpRequest,
  message: string | null = null,
): RequestResult {
  return {
    ok: false,
    status: xhr.status,
    statusText: xhr.statusText,
    headers: xhr.getAllResponseHeaders(),
    data: message || xhr.statusText,
  };
}

export function request(cep: string) {
  return new Promise<RequestResult>((resolve, reject) => {
    const url =
      'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';
    const sr = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
      xmlns:cli="http://cliente.bean.master.sigep.bsb.correios.com.br/">
      <soapenv:Header/><soapenv:Body><cli:consultaCEP><cep>${cep}</cep>
      </cli:consultaCEP></soapenv:Body></soapenv:Envelope>`;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.onload = (evt) => {
      resolve(parseXHRResult(xhr));
    };

    xhr.onerror = (evt) => {
      resolve(errorResponse(xhr, 'Failed to make request.'));
    };

    xhr.ontimeout = (evt) => {
      resolve(errorResponse(xhr, 'Request took longer than expected.'));
    };
    xhr.setRequestHeader('Content-Type', 'text/xml');
    xhr.send(sr);
  });
}
