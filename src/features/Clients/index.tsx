import { yupResolver } from '@hookform/resolvers/yup';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import { useForm } from 'react-hook-form';
import useIcons from '../../hooks/useIcons';
import { SearchSchema } from '../../shemas/SearchingInTable';
import { SearchValidation } from '../../types';

export default function Clients() {
  const {
    control,
    formState: {},
  } = useForm<SearchValidation>({
    resolver: yupResolver(SearchSchema),
  });

  const { getIcons } = useIcons();
  const { SearchIcon } = getIcons();

  const mockData = [
    {
      nome: 'João da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'Maria da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'José da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'João da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'João da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'João da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'João da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'João da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
  ];
  return (
    <Box
      sx={{
        width: '80vw',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.1)',
        borderRadius: '0.4em',
        alignSelf: 'center',
        marginLeft: '2em',
        padding: '1em',
      }}
    >
      <Typography variant="h4" fontWeight={'bold'}>
        Clientes
      </Typography>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '3em',
        }}
      >
        <FormControl
          onSubmit={() => console.log('submit')}
          sx={{
            display: 'flex',
            width: '25em',
            height: '4em',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Controller
            name="value"
            control={control}
            render={({ field }) => (
              <TextField
                id="search-textfiled"
                label="Pesquisa"
                variant="outlined"
                placeholder="Nome, Rua, Email..."
                type="search"
                sx={{
                  width: '100%',
                }}
                {...field}
              />
            )}
          />
          <IconButton aria-label="search-icon" color="info" type="submit">
            <SearchIcon fontSize="large" />
          </IconButton>
        </FormControl>

        <Button variant="contained" sx={{ height: '4em' }} color="success">
          Novo Cliente
        </Button>
      </Box>

      <TableContainer
        sx={{
          marginTop: '2em',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>CPF/CNPJ</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Rua</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.cpfCnpj}</TableCell>
                <TableCell>{item.telefone}</TableCell>
                <TableCell>{item.rua}</TableCell>
                <TableCell>
                  <IconButton aria-label="Info" color="info">
                    <InfoIcon />
                  </IconButton>
                  <IconButton aria-label="Editar" color="warning">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="Excluir" color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
