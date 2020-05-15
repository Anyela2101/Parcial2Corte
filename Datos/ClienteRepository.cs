using System.Collections.Generic;
using System.Data.SqlClient;
using Entity;
using System;

namespace Datos
{
    public class ClienteRepository
    {
        private readonly SqlConnection _connection;
        private readonly List<Paciente> pacientes = new List<Paciente>();
        public ClienteRepository(connectionManager connection){
            _connection = connection._conexion;
        }

        public void Guardar(Cliente cliente, Ruta ruta){
            using (var command = _connection.CreateCommand()){
               
            }
        }
    }
}
